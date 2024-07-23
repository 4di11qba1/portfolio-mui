import React from "react";
const Carousel = ({services}) => {
    return (
        <div className={'carousel'}>
            <dl>
                {services && services.length > 1 && services.map((service, index) => (
                    <React.Fragment key={index}>
                        <dt>{service.icon}</dt>
                        <dd><p>{service.heading}</p><br/>{service.desc}</dd>
                    </React.Fragment>
                ))}
                {services && services.length > 1 && services.map((service, index) => (
                    <React.Fragment key={index}>
                        <dt>{service.icon}</dt>
                        <dd><p>{service.heading}</p><br/>{service.desc}</dd>
                    </React.Fragment>
                ))}
            </dl>
        </div>
    );
};

export default Carousel;
