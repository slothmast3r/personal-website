import "./AboutMe.scss";


export default function AboutMe() {
  return (
    <div className="about-me-container" id="about">
      <img src="https://via.placeholder.com/500" alt="Placeholder Image" />
      <div>
        <h2>About me</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quae voluptates voluptatem quod
            voluptatibus quos doloribus quidem voluptate. Quisquam voluptatum,
            quibusdam, quia, quae voluptates voluptatem quod voluptatibus quos
            doloribus quidem voluptate.
        </p>
        <table>
  <tr>
    <th>Name</th>
    <td>Oskar Straszynski</td>
  </tr>
  <tr>
    <th>Email</th>
    <td>Oskar Straszynski</td>
  </tr>
  <tr>
    <th>Phone</th>
    <td>577966612</td>
  </tr>
  <tr>
    <th>GitHub URL</th>
    <td>slothmast3r</td>
  </tr>
</table>
      </div>

    </div>
  );
}