function ImageCard({ name, imgLink, bioDescription }) {
  return (
    <div>
      <img src={imgLink} alt={name} width="200" />
      <h2>{name}</h2>

      {/* THIS LINE SHOWS BIO */}
      <p>{bioDescription}</p>
    </div>
  );
}

export default ImageCard;