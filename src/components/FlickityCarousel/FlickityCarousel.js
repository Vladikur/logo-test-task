import Flickity from 'react-flickity-component'
import carouselImage from '../../images/info-image.png';

const flickityOptions = {
  initialIndex: 2,
}

const FlickityCarousel = () => {

  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
      wrapAround={true}
    >
      <div><img src={carouselImage} alt="image" className="flickity__image"/></div>
      <div><img src={carouselImage} alt="image" className="flickity__image"/></div>
      <div><img src={carouselImage} alt="image" className="flickity__image"/></div>
    </Flickity>
  );
}

export default FlickityCarousel;
