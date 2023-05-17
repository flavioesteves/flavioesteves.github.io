use leptos::*;

#[component]
pub fn Contact(cx: Scope) -> impl IntoView {
    let input_node_subject = create_node_ref(cx);
    view! {cx,
    <section id="contact" class="align-right">
        <div class="container">
            <div>
                <h1>"Contact Me"</h1>
                <p>"flavioafesteves@gmail.com"</p>
            </div>
            <form action="mailto:flavioafesteves@gmail.com" method="GET">
                <label for="subject">"Subject: "</label>
                <input ref={input_node_subject} type="text" id="subject" name="subject" required=true/>
                <label for="message_text">"Message: "</label>
                <textarea  type="text" id="body" name="body" required=true/>
                <button>"Create Email"</button>
            </form>
        </div>
    </section>
    }
}
