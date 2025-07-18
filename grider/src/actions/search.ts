'use server';

import { redirect } from "next/navigation"; // special error

export async function search(formData: FormData){
    const term = formData.get('term');
    console.log(term);

    if(typeof term !== 'string' || !term ){
        redirect('/')
    }

    redirect(`/search?term=${term}`);
}