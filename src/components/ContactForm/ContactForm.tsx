import { Field, Form, createForm } from "@modular-forms/solid";
import "./style.scss";

type Form = {
    name: string;
    companyOrInstitution?: string;
    email: string;
    phone?: string;

    subject: string;
    messageContent: string;

}

export const ContactForm = () => {
    const form = createForm<Form>();

    return <Form of={form} onSubmit={() => { }}>
        <Field of={form} name="email">
            {(field) => <input {...field.props} type="email" />}
        </Field>
        <input type="submit" />
    </Form>
};