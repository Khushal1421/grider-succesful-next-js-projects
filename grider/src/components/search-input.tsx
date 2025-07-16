'use client'; //125 mei explaination, 126 mei Implementation

import {Input} from '@nextui-org/react'
import { useSearchParams } from 'next/navigation';
import * as actions from '@/actions';

// 2 Options:- T redirect user to search
// 1. Coouldlace form and set onSubmit event handler,which is Classic React Aproach
// 2. Can use Server Action (will work even if user doesn't have JS enabled )

// IMP name with input is mandatory to send name to query string
export default function SearchInput(){
    const searchParams = useSearchParams();
    return (
        <form action={actions.search}>
          <Input name='term' defaultValue={searchParams.get('term') || ''}/> 
        </form>
    )
}