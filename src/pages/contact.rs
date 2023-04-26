use leptos::*;

#[component]
pub fn Contact(cx: Scope) -> impl IntoView {
    let input_node_name = create_node_ref(cx);
    let input_node_email = create_node_ref(cx);
    let input_node_subject = create_node_ref(cx);

    view! {cx,
    <section id="contact" class="align-right">
        <div class="container">
            <div>
                <h1>"Contact Me"</h1>
            </div>
            <form>
                <label for="name">{"Name: "}</label>
                <input ref={input_node_name} type="text" id="name" name="name" required=true/>
                <label for="email">"Email: "</label>
                <input ref={input_node_email} type="text" id="email" name="email" required=true />
                <label for="subject">"Subject: "</label>
                <input ref={input_node_subject} type="text" id="subject" name="subject" required=true/>
                <label for="message">"Message: "</label>
                <textarea  type="text" id="message" name="message" required=true/>
                <button>"Sent"</button>
            </form>
        </div>
    </section>
    }
}
