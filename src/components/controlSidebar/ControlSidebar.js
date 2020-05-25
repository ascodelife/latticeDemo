import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Steps, Drawer, Carousel } from "antd";
import { setCurrentStep } from "../../actions/controllerActions";
import TagList from "../controlSidebar/TagList";
import step1 from '../../data/step1Data';
import step2 from '../../data/step2Data';
function ControlSidebar(props) {
  const { Step } = Steps;
  const { current } = useSelector((state) => state.step);

  const dispatch = useDispatch();
  const carousel = useRef();

  useEffect(() => {
    if (carousel.current) {
      carousel.current.innerSlider.slickGoTo(current);
    }
    return () => {
      //
    };
  }, [current]);

  return (
    <Drawer
      className="controlSidebar"
      title="控制面板"
      placement="right"
      closable
      onClose={props.onClose}
      visible={props.visible}
      width="50rem"
    >
      <Steps size="small" current={current}>
        <Step
          className="point"
          title="普通文件分类"
          onClick={() => dispatch(setCurrentStep(0))}
        />
        <Step
          className="point"
          title="引入标签层级"
          onClick={() => dispatch(setCurrentStep(1))}
        />
        <Step
          className="point"
          title="概念格"
          onClick={() => dispatch(setCurrentStep(2))}
        />
      </Steps>
      <Carousel
        ref={carousel}
        className="carousel"
        afterChange={(current) => dispatch(setCurrentStep(current))}
      >
        <TagList data={step1.metaData} title="原始标签文件映射表"/>
        <TagList data={step2.metaData} title="引入层级关系后映射表"/>
        <div>
          <img src="/images/lattice.png" width="100%" alt="概念格"/>
        </div>
      </Carousel>
    </Drawer>
  );
}

export default ControlSidebar;
