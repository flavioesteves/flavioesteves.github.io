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
pub fn App() -> impl IntoView {
    provide_meta_context();

    view! {
    <div id="main">
        <Navbar/>
        <Router>
        <Routes>
            <Route path="/"  view=|| view! {<Homepage/>} />
            <Route path="/about" view=|| view! {<About />} />
            <Route path="/contact" view=|| view! {<Contact />} />
            <Route path= "*any" view=|| view! {<NotFoundPage />} />
        </Routes>
        </Router>
    </div>
    }
}

pub fn main() {
    mount_to_body(|| view! {<App/>})
}
