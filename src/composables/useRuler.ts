import useMouseMove from './useMouseMove';
import {
    watch,
    ref,
    onMounted,
    onUnmounted,
    computed,
} from 'vue';
import { minOffset, maxOffset } from '../utilities/help';
import { rulerInit } from '../utilities/settings';
import { key } from '../store/';
import { useStore } from 'vuex';

export default function useRuler(props: any, direction: string, emit: any) {

    const store = useStore(key);
    const gender = store.getters.gender;
    const unit = computed(() => {
        if (props.nameScreen == 'age') {
            return '';
        }
        return props.nameScreen == 'height'
            ? store.getters.unitHeight
            : store.getters.unitWeight;
    });
    const currentValue = ref(props.startValue);
    const offsetCurrent = ref();
    const stepPx =
        props.nameScreen == 'age'
            ? rulerInit[props.nameScreen].stepPx
            : rulerInit[props.nameScreen][unit.value].stepPx;

    const setOffsetCurrent = (_value: number): void => {
        if (props.nameScreen == 'age') {
            offsetCurrent.value =
                rulerInit[props.nameScreen].offset +
                props.screenHeight / 2 -
                _value * stepPx;
        } else {
            offsetCurrent.value =
                rulerInit[props.nameScreen][unit.value].offset +
                props.screenHeight / 2 -
                _value * stepPx;
        }
    };

    setOffsetCurrent(currentValue.value);

    const { styleObject, currentValueLiner, handlerMouseDown, handlerTouchStart } =
        useMouseMove(
            currentValue.value,
            offsetCurrent.value,
            minOffset(props.nameScreen, props.screenHeight, unit.value, gender),
            maxOffset(props.nameScreen, props.screenHeight, unit.value, gender),
            stepPx,
            direction
        );

    const correctionRulerY = () => {
        styleObject.value.backgroundPositionY = offsetCurrent.value + 'px';
    };
    const correctionRulerX = () => {
        styleObject.value.backgroundPositionX = offsetCurrent.value + 'px';
    };

    const handlerMouseUp = () => {
        currentValue.value = Math.round(currentValueLiner.value);
        setOffsetCurrent(currentValue.value);
        direction == 'Y' ? correctionRulerY() : correctionRulerX();
        styleObject.value.transition = 'all 0.3s';
        emit('changeValue', Math.round(currentValue.value));

    };

    const eventChangeValue = () => {
        emit('changeValue', currentValueLiner.value);
    };
    
    watch(currentValueLiner, eventChangeValue);

    onMounted(() => {
        document.addEventListener('mouseup', handlerMouseUp);
        document.addEventListener('touchend', handlerMouseUp);
    });
    onUnmounted(() => {
        document.removeEventListener('mouseup', handlerMouseUp);
        document.removeEventListener('touchend', handlerMouseUp);
    });
    return {
        styleObject,
        handlerMouseDown,
        handlerTouchStart
    }
}