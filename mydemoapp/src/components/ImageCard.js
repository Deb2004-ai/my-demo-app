function ImageCard({name,imgLink}) {
    console.log("This is the ImageCard component");
    return (
        <div>
            <h2>{name}</h2>
            <img src={imgLink} alt="placeholder" />
        </div>
    );
}

export default ImageCard;