import { ref } from 'vue';

export default function useMouseMove(
  startValue: number,
  offset: number,
  minOffset: number,
  maxOffset: number,
  stepPx: number,
  direction: string
) {
  let startPos = 0;
  let isMoving = false;
  
  const currentValueLiner = ref(startValue);
  const styleObject = ref({ backgroundPositionY: '', backgroundPositionX: '', transition: '' });
  //init position ruler
  if (direction == 'Y') styleObject.value.backgroundPositionY = offset + 'px';
  else styleObject.value.backgroundPositionX = offset + 'px';

  const setCurrentValue = (_offset: number) => {
    currentValueLiner.value -= _offset / stepPx;
    if (direction == 'Y') styleObject.value.backgroundPositionY = offset + 'px';
    else styleObject.value.backgroundPositionX = offset + 'px';
  }

  const checkOffset = (_offset: number): boolean => {
    if (offset >= minOffset && _offset > 0) {
      isMoving = false;
      offset -= _offset;
      return false;
    }

    if (offset <= maxOffset && _offset < 0) {
      isMoving = false;
      offset -= _offset;
      return false;
    }
    return true;
  }

  const calculateOffset = (event: any) => {
    if (event.changedTouches && event.changedTouches[0]) {
      const _offset = event.changedTouches[0][`client${direction}`] - startPos;
      offset += _offset;
      if (!checkOffset(_offset)) return;
      startPos = event.changedTouches[0][`client${direction}`];
      setCurrentValue(_offset);
    } else {
      const _offset = event[`client${direction}`] - startPos;
      offset += _offset;
      if (!checkOffset(_offset)) return;
      startPos = event[`client${direction}`];
      setCurrentValue(_offset);
    }
  };

  const handlerTouchStart = (event: any): void => {
    styleObject.value.transition = '';
    isMoving = true;
    startPos = event.changedTouches[0]?.[`client${direction}`];
    event.target.ontouchmove = handlerMouseMove;
    event.target.ontouchend = handlerMouseUp;
  };

  const handlerMouseDown = (event: any): void => {
    styleObject.value.transition = '';
    isMoving = true;
    startPos = direction == 'Y' ? event.clientY : event.clientX;
    document.ondragstart = () => false;
    event.target.ondragstart = () => false;
    event.target.onmousemove = handlerMouseMove;
    document.onmouseup = handlerMouseUp;
  };

  const handlerMouseMove = (event: any): void => {   
    if (!isMoving) return;
    styleObject.value.transition = '';
    calculateOffset(event);
  };

  const handlerMouseUp = (event: any): void => {
    isMoving = false;
    event.target.removeEventListener('mousemove', handlerMouseMove);
    event.target.removeEventListener('mousedown', handlerMouseDown);
    event.target.removeEventListener('touchend', handlerTouchStart);
  };

  return {
    styleObject,
    currentValueLiner,
    handlerMouseDown,
    handlerTouchStart,
  };
}
