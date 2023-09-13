use leptos::*;
use leptos_meta::provide_meta_context;
use leptos_router::*;

mod pages;
use pages::about::About;
use pages::contact::Contact;
use pages::homepage::Homepage;
use pages::notfound::NotFoundPage;

mod components;
use components::navbar::Navbar;

#[component]
pub fn App(cx: Scope) -> impl IntoView {
    provide_meta_context(cx);

    view! {cx,
    <div id="main">
        <Navbar/>
        <Router>
        <Routes>
            <Route path="/"  view=|cx| view! {cx, <Homepage/>} />
            <Route path="/about" view=|cx| view! {cx, <About />} />
            <Route path="/contact" view=|cx| view! {cx, <Contact />} />
            <Route path= "*any" view=|cx| view! {cx, <NotFoundPage />} />
        </Routes>
        </Router>
    </div>
    }
}

pub fn main() {
    mount_to_body(|cx| view! {cx, <App/>})
}
