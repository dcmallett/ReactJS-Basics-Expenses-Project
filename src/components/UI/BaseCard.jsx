import './BaseCard.css';

const BaseCard = (props) => {
    //here we are creating a constant with the name of styles.
    //and we are assigning our base-card class selector and adding it using props.className.
    //this is because this BaseCard component is a custom component so if we wrap this around  our code.
    //the styles that are wrapped inside of this BaseCard will be removed


    //so to allow us to use custom components as a wrapper and keep our styling we use this 
    // styles const which allows us to take in the props of the className to keep our styling
    const styles = 'base-card ' + props.className;
    return (
        <div className={styles}>
            {/* 
            props children the value of this prop will always be the content of the opening and closing content
            so on props children inside of the card.
            so any content we put between this BaseCard component will display because of props children
                
            */}
            {props.children}
        </div>
    )
}

export default BaseCard;