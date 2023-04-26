use leptos::*;
use leptos_router::*;

mod pages;
use pages::homepage::{Homepage, HomepageProps};
use pages::notfound::{NotFoundPage, NotFoundPageProps};

mod components;
use components::cursor_animation::{Animations, AnimationsProps};
use components::navbar::{Navbar, NavbarProps};

#[component]
pub fn App(cx: Scope) -> impl IntoView {
    view! {cx,
    <div id="main">
        <div id="circle"></div>
        <div id="cursor"></div>
        <Navbar/>
        <Router>
        <Routes>
            <Route path=""  view=|cx| view! {cx, <Homepage/>} />
            <Route path="/about" view=|cx| view! {cx, <NotFoundPage />} />
            <Route path="/contact" view=|cx| view! {cx, <NotFoundPage />} />
            <Route path= "/*any" view=|cx| view! {cx, <NotFoundPage />} />
        </Routes>
        </Router>
    </div>
    }
}

pub fn main() {
    mount_to_body(|cx| view! {cx, <App/>})
}
