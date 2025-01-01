use leptos::*;

const NAME: &str = "Flávio Esteves";
const LOCATION: &str = "Lisbon, Portugal";
const  RESUME_1: &str = "Highly motivated Fullstack Developer with 7 years of proven expertise within the ServiceNow ecosystem.";

const RESUME_2: &str = "Proficient in a diverse range of languages including JavaScript, TypeScript, Golang, Rust, and Java.";

#[component]
pub fn Homepage() -> impl IntoView {
    view! {
        <section id="home-a" class="align-right">
            <div class="container">
                <div id="personal-image" class="pic" />
                <div id="resume">
                    <h1>{NAME}</h1>
                    <p>{LOCATION}</p>
                    <p>{RESUME_1}</p>
                    <p>{RESUME_2}</p>
                    <div></div>
                    <ul class="social">
                    <li><a class="a-link" href="https://github.com/flavioesteves/"><i class="fa-brands fa-github fa-lg"></i></a></li>
                    <li><a class="a-link" href="https://www.linkedin.com/in/flavioesteves/"><i class="fa-brands fa-linkedin"></i></a></li>
                    </ul>

                </div>
            </div>
        </section>
    }
}
