// src/components/ServiceIllustration.jsx
const ServiceIllustration = ({ type = null, fallbackIcon = null, className = '' }) => {

    return (
        <div className={`flex items-center justify-center ${className} type-${type}`}>
            {fallbackIcon}
        </div>
    );
};

export default ServiceIllustration;
