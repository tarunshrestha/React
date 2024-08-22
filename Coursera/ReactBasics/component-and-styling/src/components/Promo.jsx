export default function Promo(props) {

    const styles = {
        color: "tomato",
        fontSize: "40px"
    }
    const promoStyle = {
        fontWeight: 'bold',
        lineHeight: '20px',
    };
    
    return (
            <div className="promo-section">
                <div>
                    <h1 style={styles}>
                        {props.heading}
                    </h1>
                </div>
                <div>
                    <h2 style={promoStyle}>{props.promoSubHeading}</h2>
                </div>
            </div>
        );
    }