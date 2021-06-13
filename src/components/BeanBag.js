import "./beanBag.css";

const BeanBag = (props) => {
    return (
        <div className='BeanBag' style={{ backgroundColor: props.color }}></div>
    );
};

export default BeanBag;
