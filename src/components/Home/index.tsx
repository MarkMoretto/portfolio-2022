
// import logo from "../../logo.svg"
// import styles from "./Home.module.css"
// import homeImage from "./pexels-olya-kobruseva-sm.jpg"
import homeImage from "../../static/images/animals/puppy-profile-1-1200x800.jpg"

const Home = () => {
    return (
        <div className="home">
			<div className="container">
				<div className="row align-items-center my-5">
					<div className="col-lg-7">
						<img
							className="img-fluid rounded mb-4 mb-lg-0"
							src={homeImage}
							alt=""
						/>
					</div>
					<div className="col-lg-5">
						<h1>Home</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit tellus mauris a diam maecenas sed enim ut. Turpis egestas pretium aenean pharetra. At lectus urna duis convallis convallis tellus id. Commodo ullamcorper a lacus vestibulum sed arcu. Quis hendrerit dolor magna eget est lorem. Felis bibendum ut tristique et egestas. Aliquet porttitor lacus luctus accumsan tortor. Ac tortor dignissim convallis aenean et tortor. At ultrices mi tempus imperdiet. Vitae ultricies leo integer malesuada. Diam donec adipiscing tristique risus. Id volutpat lacus laoreet non curabitur. Orci nulla pellentesque dignissim enim sit amet. Sem viverra aliquet eget sit amet tellus cras adipiscing. Commodo ullamcorper a lacus vestibulum sed arcu. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Donec et odio pellentesque diam.
							<br />
							Nulla aliquet enim tortor at auctor urna. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Et magnis dis parturient montes nascetur ridiculus mus. Rutrum quisque non tellus orci ac. Egestas dui id ornare arcu odio ut sem nulla. Ut sem nulla pharetra diam sit amet. Duis at consectetur lorem donec massa sapien faucibus et. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Sodales ut eu sem integer vitae. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Penatibus et magnis dis parturient montes.							
						</p>
					</div>

				</div>

			</div>
        </div>
    )
}

export default Home