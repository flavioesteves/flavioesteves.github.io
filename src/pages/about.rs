use leptos::*;

const RESUME_1: &str = "Hello, my name is Flávio Esteves, and I embarked on my journey as a Software Developer seven years ago when I enrolled in a full-stack developer Bootcamp focused on Java. Since then, I have been captivated by the opportunity to learn something new every day and apply that knowledge in practical ways.";
const RESUME_2: &str = "After seven years of building custom applications on the ServiceNow platform, I'm eager to explore new coding challenges and expand my technical horizons beyond low-code environments.";
const RESUME_3: &str = "I am incredibly excited about this change so I can tackle new challenges and broaden my skill set. My passion for continuous learning and improvement drives me, and I am actively seeking opportunities to transition into a different technology stack where I can utilize my customer-focused experience to create robust and innovative solutions.";
const RESUME_4: &str = "During my free time, I thoroughly enjoy exploring new culinary experiences, whether by cooking dishes myself or discovering new restaurants. Additionally, I am an ardent music enthusiast, appreciating a wide range of music genres. You can often find me attending concerts as there's nothing quite like the energy of a live performance. 🙂";

#[component]
pub fn About() -> impl IntoView {
    view! {
            <section id="about-a" class="align-right">
                <div class="container">
                    <div id="personal-image">
                        <img src="../assets/images/fe2.jpg" alt="" />
                    </div>

                    <div id="title">
                        <h2>"Flávio Esteves"</h2>
                        <p>"Fullstack Developer"</p>
                        <br/>
                    </div>
                    <div id="resume">
                        <p>{RESUME_1}</p>
                        <br/>
                        <p>{RESUME_2}</p>
                        <br/>
                        <p>{RESUME_3}</p>
                        <br/>
                        <p>{RESUME_4}</p>
                    </div>
                </div>
        </section>
    }
}
