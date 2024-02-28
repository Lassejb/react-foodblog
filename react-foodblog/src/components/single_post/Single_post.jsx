import "./Single_post.css";

import placeholder_image from "../../assets/placeholder.jpg";

export default function Single_post() {
  return (
    <div className="Single_post">
      <div className="single_post_Box">
        <div className="image_container">
          <img src={placeholder_image} alt="" className="single_post_Image" />
        </div>
        <div>
          <h1 className="single_post_title">Lorem ipsum dolor</h1>
          <p className="single_post_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vitae posuere tellus. Etiam eu leo et ex rhoncus imperdiet. Sed
            consectetur, urna ac varius tincidunt, lectus turpis mollis dui, ut
            dignissim ante nibh ac mi. Sed iaculis, lorem in rutrum finibus,
            arcu sapien consectetur enim, eu elementum erat ex vulputate mauris.
            Maecenas elementum purus nec dui malesuada ornare. Aenean iaculis
            dolor eu nisi facilisis, in tincidunt enim dictum. Nulla facilisi.
            Ut finibus rhoncus risus eget interdum. Proin vitae arcu lectus.
            Etiam non sollicitudin dui, bibendum condimentum nulla.
          </p>
        </div>
      </div>
    </div>
  );
}
