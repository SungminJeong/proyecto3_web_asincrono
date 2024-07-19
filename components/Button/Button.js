import './Button.css';

const Button = (text) => {
    return `
    <button class="btn" id="${text}">${text}</button>
    `
}

export default Button;