import PropTypes from 'prop-types';

const Tarjeta = ({ title, attributes, buttonText, buttonUrl }) => (
    <div className="card mt-3">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <ul className="list-group list-group-flush">
                {attributes.map((attribute, index) => (
                    <li key={index} className="list-group-item">
                        <strong>{attribute.label}: </strong>{attribute.value}
                    </li>
                ))}
            </ul>
            <a href={buttonUrl} className="btn btn-primary mt-2">{buttonText}</a>
        </div>
    </div>
);

Tarjeta.propTypes = {
    title: PropTypes.string.isRequired,
    attributes: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    ).isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonUrl: PropTypes.string.isRequired
};

export default Tarjeta;
