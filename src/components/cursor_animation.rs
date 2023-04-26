use leptos::*;
use wasm_bindgen::prelude::*;
use web_sys::{console, Event, HtmlElement};

#[component]
pub fn Animations(cx: Scope) -> impl IntoView {
    let window = window();

    let cursor_animation = make_cursor_animation();
    window
        .add_event_listener_with_callback("mousemove", cursor_animation.as_ref().unchecked_ref())
        .expect("Failed to load mousemove event");
    cursor_animation.forget();

    view! {
        cx,
        <div id="circle"></div>
        <div id="cursor"></div>
    }
}

fn create_events() {
    let document = document();
    let elements = document.query_selector_all(".a-link").unwrap();
    for i in 0..elements.length() {
        let handle_mouse_leave = handle_mouse_leave_callback();
        let handle_mouse_enter = handle_mouse_enter_callback();
        let element = elements.item(i).unwrap().unchecked_into::<HtmlElement>();
        element
            .add_event_listener_with_callback(
                "mouseenter",
                handle_mouse_enter.as_ref().unchecked_ref(),
            )
            .unwrap();
        element
            .add_event_listener_with_callback(
                "mouseleave",
                handle_mouse_leave.as_ref().unchecked_ref(),
            )
            .unwrap();
        handle_mouse_leave.forget();
        handle_mouse_enter.forget();
    }
}

// Event: mouse enter on link
fn mouse_enter(_event: Event) {
    let cursor = document().get_element_by_id("cursor").unwrap();
    let circle = document().get_element_by_id("circle").unwrap();
    cursor.class_list().add_1("hovered").unwrap();
    circle.class_list().add_1("hovered").unwrap();
}

// Event: mouse leave on link
fn mouse_leave(_event: Event) {
    let cursor = document().get_element_by_id("cursor").unwrap();
    let circle = document().get_element_by_id("circle").unwrap();
    cursor.class_list().remove_1("hovered").unwrap();
    circle.class_list().remove_1("hovered").unwrap();
}

fn handle_mouse_leave_callback() -> Closure<dyn FnMut(Event)> {
    let closure = Closure::wrap(Box::new(mouse_leave) as Box<dyn FnMut(Event)>);
    closure
}

fn handle_mouse_enter_callback() -> Closure<dyn FnMut(Event)> {
    let closure = Closure::wrap(Box::new(mouse_enter) as Box<dyn FnMut(Event)>);
    closure
}

fn make_cursor_animation() -> Closure<dyn FnMut(web_sys::MouseEvent)> {
    let document = document();

    // Define a closure that will handle the mousemove event
    Closure::wrap(Box::new(move |event: web_sys::MouseEvent| {
        let circle = document.get_element_by_id("circle").unwrap();
        let cursor = document.get_element_by_id("cursor").unwrap();

        //TODO this is a workaround find a better way
        //to get the elements onload/creation of the component
        create_events();

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
