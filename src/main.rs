use leptos::*;

mod pages;
use pages::homepage::Homepage;

mod components;
use components::navbar::Navbar;

fn main() {
    mount_to_body(|cx| {
        view! {cx,
            <div id="main">
                <Navbar/>
                <Homepage/>
            </div>
        }
    })
}
