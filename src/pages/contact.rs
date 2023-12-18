use leptos::{
    html::{Input, Textarea},
    *,
};
use wasm_bindgen::JsCast;
use web_sys::{window, Document, HtmlInputElement, HtmlTextAreaElement, Window};

#[component]
pub fn Contact(cx: Scope) -> impl IntoView {
    let input_node_subject = create_node_ref::<Input>(cx);
    let input_node_message = create_node_ref::<Textarea>(cx);
    view! {cx,
    <section id="contact" class="align-right">
        <div class="container">
            <div>
                <h1>"Contact Me"</h1>
                <p>"flavioafesteves@gmail.com"</p>
            </div>
            <div>
                <label for="subject">"Subject: "</label>
                <input ref={input_node_subject} type="text" id="subject" name="subject" required=true />
                <label for="message_text">"Message: "</label>
                <textarea type="text" ref={input_node_message} id="message_text" name="message_text" required=true />
                <a href="" id="create_email">
                    <button on:click= move |_|send_email() href="">"Send Email"</button>
                </a>
            </div>
        </div>
    </section>
    }
}

fn send_email() {
    let window: Window = window().expect("Window not Found!!");
    let document: Document = window.document().expect("Document not Found!!");

    let _subject = get_subject(&document);
    let _body = get_message(&document);

    let link = document
        .get_element_by_id("create_email")
        .expect("create Email not Found!!");

    let href = format!(
        "mailto:flavioafesteves@gmail.com?subject={}&body={}",
        _subject.unwrap(),
        _body.unwrap()
    );

    link.set_attribute("href", &href).unwrap();
    ()
}

fn get_subject(document: &Document) -> Option<String> {
    let subject = document
        .get_element_by_id("subject")
        .expect("subject not found");

    if let Some(input_element) = subject.dyn_into::<HtmlInputElement>().ok() {
        let input_value = input_element.value();
        return Some(input_value);
    }
    None
}

fn get_message(document: &Document) -> Option<String> {
    let message_text = document
        .get_element_by_id("message_text")
        .expect("body not Found!!");

    if let Some(input_element) = message_text.dyn_into::<HtmlTextAreaElement>().ok() {
        let input_value = input_element.value();
        return Some(input_value);
    }
    None
}
