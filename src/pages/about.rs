use leptos::*;

#[component]
pub fn About(cx: Scope) -> impl IntoView {
    view! {cx,

            <section id="about-a" class="align-right">
                <div class="container">
                    <div id="about_title">
                        <span>{"About"}</span>
                        <h3>{"About Me"}</h3>
                    </div>
                    <div id="title">
                        <h2>{"Flavio Esteves"}</h2>
                        <p>{"Fullstack Developer"}</p>
                    </div>
                    <div id="resume">
                        <p>{"Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis."}</p>
                    </div>
                </div>
        </section>
    }
}
