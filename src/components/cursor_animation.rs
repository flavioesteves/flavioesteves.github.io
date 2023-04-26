use leptos::*;
use wasm_bindgen::prelude::*;
use web_sys::console;

#[component]
pub fn Animations(cx: Scope) -> impl IntoView {
    let window = window();

    let cursor_animation = make_cursor_animation();
    window
        .add_event_listener_with_callback("mousemove", cursor_animation.as_ref().unchecked_ref())
        .expect("Failed to load mousemove event");
    cursor_animation.forget();
}

fn make_cursor_animation() -> Closure<dyn FnMut(web_sys::MouseEvent)> {
    let document = document();

    // Define a closure that will handle the mousemove event
    Closure::wrap(Box::new(move |event: web_sys::MouseEvent| {
        let circle = document.get_element_by_id("circle").unwrap();
        let cursor = document.get_element_by_id("cursor").unwrap();

        // Calculate the top and left position of the cursor and circle elements based on the mouse position
        let cursor_top = &event.page_y() - (cursor.client_height() / 2);
        let cursor_left = &event.page_x() - (cursor.client_width() / 2);
        let circle_top = &event.page_y() - (circle.client_height() / 2);
        let circle_left = &event.page_x() - (circle.client_width() / 2);

        // Set the style of the cursor and circle elements based on the calculated positions

        cursor
            .set_attribute(
                "style",
                &format!("top: {}px; left: {}px;", cursor_top + 2, cursor_left + 2).to_string(),
            )
            .expect("Was not possible to apply style in the Cursor");
        circle
            .set_attribute(
                "style",
                &format!("top: {}px; left: {}px;", circle_top + 2, circle_left + 2).to_string(),
            )
            .expect("Was not possible to apply style in the Circle");
    }) as Box<dyn FnMut(web_sys::MouseEvent)>)
}
