import type { NextPage } from 'next';
import { globalStyles } from '../styles';
import { useForm, FormProvider } from 'react-hook-form';
import { json } from 'stream/consumers';

interface FormState {
    title: string;
    description: string;
}
const CreateCard: NextPage = () => {
    const API = '/api/cards/create';
    const form = useForm<FormState>({
        defaultValues: {
            title: '',
            description: ''
        }
    })
    const { handleSubmit, register } = form;
    const onSubmit = handleSubmit(async ({ title, description }) => {

        const res = await fetch(API, { method: "POST", headers: { 'Content-Type': 'application/json', }, body: JSON.stringify({ title, description }) });
    })
    return (
        <div css={globalStyles.container}>
            <main css={globalStyles.main}>
                <h1 css={globalStyles.title}>
                    Create a new card
                </h1>
                <FormProvider {...form}>
                    <form css={globalStyles.form} onSubmit={onSubmit}>
                        <input css={globalStyles.input} {...register("title")} />
                        <textarea css={globalStyles.textarea} {...register("description")} />
                        <button css={globalStyles.button} type="submit">
                            Create
                        </button>
                    </form>
                </FormProvider>

            </main>
        </div>
    );
};

export default CreateCard;
