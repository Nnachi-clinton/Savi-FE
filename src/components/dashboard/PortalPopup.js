import { useMemo, useCallback, useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const PortalOverlay = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
  z-index: 1000; /* Ensure a high z-index to appear above other elements */
`;

const PopupContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Optional: Add a box shadow for depth */
`;

const PortalPopup = ({
  children,
  overlayColor,
  placement = 'Centered',
  onOutsideClick,
  zIndex = 100,
  left = 0,
  right = 0,
  top = 0,
  bottom = 0,
  relativeLayerRef,
}) => {
  const relContainerRef = useRef(null);
  const [relativeStyle, setRelativeStyle] = useState({
    opacity: 0,
  });

  const popupStyle = useMemo(() => {
    const style = {
      zIndex: zIndex,
    };

    if (!relativeLayerRef?.current) {
      switch (placement) {
        case 'Centered':
          style.alignItems = 'center';
          style.justifyContent = 'center';
          break;
        case 'Top left':
          style.alignItems = 'flex-start';
          break;
        case 'Top center':
          style.alignItems = 'center';
          break;
        case 'Top right':
          style.alignItems = 'flex-end';
          break;
        case 'Bottom left':
          style.alignItems = 'flex-start';
          style.justifyContent = 'flex-end';
          break;
        case 'Bottom center':
          style.alignItems = 'center';
          style.justifyContent = 'flex-end';
          break;
        case 'Bottom right':
          style.alignItems = 'flex-end';
          style.justifyContent = 'flex-end';
          break;
      }
    }
    style.opacity = 1;
    return style;
  }, [placement, zIndex, relativeLayerRef?.current]);

  const setPosition = useCallback(() => {
    const relativeItem = relativeLayerRef?.current?.getBoundingClientRect();
    const containerItem = relContainerRef?.current?.getBoundingClientRect();
    const style = { opacity: 1 };
    if (relativeItem && containerItem) {
      const {
        x: relativeX,
        y: relativeY,
        width: relativeW,
        height: relativeH,
      } = relativeItem;
      const { width: containerW, height: containerH } = containerItem;
      style.position = 'absolute';
      switch (placement) {
        case 'Top left':
          style.top = relativeY - containerH - top;
          style.left = relativeX + left;
          break;
        case 'Top right':
          style.top = relativeY - containerH - top;
          style.left = relativeX + relativeW - containerW - right;
          break;
        case 'Bottom left':
          style.top = relativeY + relativeH + bottom;
          style.left = relativeX + left;
          break;
        case 'Bottom right':
          style.top = relativeY + relativeH + bottom;
          style.left = relativeX + relativeW - containerW - right;
          break;
      }

      setRelativeStyle(style);
    } else {
      style.maxWidth = '90%';
      style.maxHeight = '90%';
      setRelativeStyle(style);
    }
  }, [
    left,
    right,
    top,
    bottom,
    placement,
    relativeLayerRef?.current,
    relContainerRef?.current,
  ]);

  useEffect(() => {
    setPosition();

    window.addEventListener('resize', setPosition);
    window.addEventListener('scroll', setPosition, true);

    return () => {
      window.removeEventListener('resize', setPosition);
      window.removeEventListener('scroll', setPosition, true);
    };
  }, [setPosition]);

  const onOverlayClick = useCallback(
    (e) => {
      if (onOutsideClick && e.target.classList.contains('portalPopupOverlay')) {
        onOutsideClick();
      }
      e.stopPropagation();
    },
    [onOutsideClick]
  );

  return (
    <Portal>
      <PortalOverlay
        className="portalPopupOverlay"
        style={popupStyle}
        onClick={onOverlayClick}
      >
        <PopupContent ref={relContainerRef} style={relativeStyle}>
          {children}
        </PopupContent>
      </PortalOverlay>
    </Portal>
  );
};

const Portal = ({ children, containerId = 'portals' }) => {
  let portalsDiv = document.getElementById(containerId);
  if (!portalsDiv) {
    portalsDiv = document.createElement('div');
    portalsDiv.setAttribute('id', containerId);
    document.body.appendChild(portalsDiv);
  }

  return createPortal(children, portalsDiv);
};

export default PortalPopup;
