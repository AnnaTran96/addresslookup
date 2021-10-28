import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Select from 'react-select'
import SubmitButton from '../components/buttons/FormButton'
import Button from '../components/buttons/NavigationButton'


// import CreatableSelect from "react-select/creatable"

// TODO: remove console logs - BY TERM
// TODO: replace search term by automation

type OptionType = {
    id: string,
    value: string,
    label: string
}

export interface AddressLookUpProps {
    apiKey?: string
}

const AddressLookUp = ({
    apiKey 
}: AddressLookUpProps) => {

    const [term, setTerm] = useState('')
    const [results, setResults] = useState<any[]>([])
    const [id, setId] = useState<String>('')
    const [selectedOption, setSelectedOption] = useState<OptionType>()

    const history = useHistory()

    const API_KEY = 'pGTmtTsS5EGNm5Bpga2Bdg33168'

    const handleInput = (e: React.FormEvent<EventTarget>) => {
        setTerm(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()
        setTerm(e.target.value)
        fetch(`https://api.getAddress.io/autocomplete/${term}?api-key=${API_KEY}`, {
            method: 'GET', 
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer'
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        setResults(data.suggestions)
        })
        .catch((error) => {
        console.error('Error:', error);
        })
    }

    const options: OptionType[] = results.map(suggestion => {
        return { id: suggestion.id, value: suggestion.address, label: suggestion.address };
    })
    
    console.log({results})
    console.log({options})


    const handleChange = (selectedOption: any) => {
        setSelectedOption(selectedOption)
        console.log({selectedOption})
        setId(selectedOption.id)
        console.log({id})
    }

    const returnHome = () => {
        history.replace('/')
    }

    const addNewAddress = () => {
        history.replace('/addnewaddress')
    }

    return(
        
        <div className="address-container">
            <div className="address-inner-container-first"></div>    
            <div className="address-inner-container-second"></div>
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTYycHgiIGhlaWdodD0iMTYwcHgiIHZpZXdCb3g9IjAgMCAxNjIgMTYwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPkNvbWJpbmVkIFNoYXBlIENvcHk8L3RpdGxlPgogICAgPGcgaWQ9IkJFUVVFU1QtLy1Ib21lcGFnZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkZJTkFMOi1Ib21lcGFnZS0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02ODAuMDAwMDAwLCAtMTcwLjAwMDAwMCkiIGZpbGw9IiNGRkNDMUUiPgogICAgICAgICAgICA8cGF0aCBkPSJNODQwLjk5OTk4NiwxNjkuMDAxMjMxIEM4MzkuMTc3NTIyLDI1Ni44NTc0NTYgNzY4Ljc1ODgyMiwzMjcuODk5MjAxIDY4MS4wMDA1NjUsMzMxLjAwMDAxMiBMNjgxLDE2OSBaIiBpZD0iQ29tYmluZWQtU2hhcGUtQ29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzYxLjAwMDAwMCwgMjUwLjAwMDAwMCkgcm90YXRlKC0yNzAuMDAwMDAwKSB0cmFuc2xhdGUoLTc2MS4wMDAwMDAsIC0yNTAuMDAwMDAwKSAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" className="shape1" alt="yellow shape"></img>
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTk1cHgiIGhlaWdodD0iMTk4cHgiIHZpZXdCb3g9IjAgMCAxOTUgMTk4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPkNvbWJpbmVkIFNoYXBlIENvcHkgMjwvdGl0bGU+CiAgICA8ZyBpZD0iQkVRVUVTVC0vLUhvbWVwYWdlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iRklOQUw6LUhvbWVwYWdlLSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzMjUuMDAwMDAwLCAtNjIyLjAwMDAwMCkiIGZpbGw9IiNGRjRDNTAiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTQyNC4yNDkzNiw2MjIgQzE0NzguNTEwOTksNjIyIDE1MjIuNDk4NzMsNjY1Ljk4NzE3MyAxNTIyLjQ5ODczLDcyMC4yNDgxMDEgQzE1MjIuNDk4NzMsNzIwLjQxNTQ5NSAxNTIyLjQ5ODMxLDcyMC41ODI3OTEgMTUyMi40OTc0Nyw3MjAuNzQ5OTg4IEwxNTIzLDcyMC43NDkzNjcgTDE1MjMsODIwIEwxMzI2LjUwMTI3LDgyMCBMMTMyNi40OTk2Niw3MzAuMjE4MzI3IEMxMzI2LjE2OTIzLDcyNi45Mzk4MDggMTMyNiw3MjMuNjEzNzE4IDEzMjYsNzIwLjI0ODEwMSBDMTMyNiw2NjUuOTg3MTczIDEzNjkuOTg3NzQsNjIyIDE0MjQuMjQ5MzYsNjIyIFoiIGlkPSJDb21iaW5lZC1TaGFwZS1Db3B5LTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0MjQuNTAwMDAwLCA3MjEuMDAwMDAwKSBzY2FsZSgtMSwgMSkgcm90YXRlKDkwLjAwMDAwMCkgdHJhbnNsYXRlKC0xNDI0LjUwMDAwMCwgLTcyMS4wMDAwMDApICI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" className="shape2" alt="red circle shape"></img>
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjA0cHgiIGhlaWdodD0iMjA0cHgiIHZpZXdCb3g9IjAgMCAyMDQgMjA0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPkNvbWJpbmVkIFNoYXBlPC90aXRsZT4KICAgIDxnIGlkPSJCRVFVRVNULS8tSG9tZXBhZ2UiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJGSU5BTDotSG9tZXBhZ2UtIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODAuMDAwMDAwLCAtODU2LjAwMDAwMCkiIGZpbGw9IiMwMDlCQzEiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjg0LjAwMDAwMSw4NTUuOTk5OTggQzI4MC4zODA5MjcsOTY3LjAyOTc1MiAxOTEuMDI5NzUyLDEwNTYuMzgwOTMgNzkuOTk5OTc5NywxMDYwIEw4MC4wMDAwNTUsODU2LjAwMDA1NSBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" className="shape3" alt="teal shape"></img>
            <div className="address-wrapper">
                <h1 className="address-title">Search by city</h1>
                <div className="address-form">
                <label htmlFor="id">Search by City</label>
                <input type="text" id="term" value={term} onChange={handleInput} required/>
                <SubmitButton onClick={handleSubmit}>Find</SubmitButton>
            </div>
            {results &&
                <Select 
                    options={options}
                    onChange={handleChange}
                    value={selectedOption}
                    className="select"
                    isClearable
                />
            }
            </div>
            <Button onClick={returnHome}>Back to home page</Button>
            <Button id="new-address" onClick={addNewAddress}>Add new address</Button>
            
        </div>
    )
}

export default AddressLookUp