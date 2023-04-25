use leptos::*;

const NAME: &str = "Flávio Esteves";
const LOCATION: &str = "Lisbon, Portugal";
const RESUME_1: &str =
    "I am a Fullstack Developer with 5 years of experince in ServiceNow, JavaScript and Java";
const RESUME_2: &str = "Currently expanding the stack with Rust";

#[component]
pub fn Homepage(cx: Scope) -> impl IntoView {
    view! {cx,
               <section id="home-a" class="align-right">
                <div class="container">
                <div id="personal-image" class="pic" />
                <div id="resume">
                    <h1>{NAME}</h1>
                    <p>{LOCATION}</p>
                    <p>{RESUME_1}</p>
                    <p>{RESUME_2}</p>
                </div>
                <div class="social">
                    <ul>
                      <li><a href="https://github.com/flavioesteves/"><i class="fa-brands fa-github fa-lg"></i></a></li>
                      <li><a href="https://www.linkedin.com/in/flavioesteves/"><i class="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </section>
    }
}
