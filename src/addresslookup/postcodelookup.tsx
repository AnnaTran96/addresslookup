import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Select from 'react-select'
import SubmitButton from '../components/buttons/FormButton'
import Button from '../components/buttons/NavigationButton'
import './styles.scss'

// TODO: remove console logs - BY TERM
// TODO: error handling + validation
// TODO: add unit tests
// TODO: store API key

type OptionType = {
    value: string,
    label: string
}

const PostcodeLookup = () => {

    const [addresses, setAddresses] = useState([])
    const [state, setState] = useState({
        id: '',
        lineOne: '',
        lineTwo: '',
        lineThree: '',
        lineFour: '',
        town: '',
        country: '',
        postcode: '',
        dataPostcode: '',
        error: null
    })
    const [selectedOption, setSelectedOption] = useState<OptionType>()

    const history = useHistory()

    // const API_KEY = 'pGTmtTsS5EGNm5Bpga2Bdg33168'
    const API_KEY = 'odHqOd1MsECNFi_4xTyXtw33193'

    const handleInput = (e: any) => {
        const {name, value} = e.target
        setState({
            ...state,
            [name]: value
        })
    }


    const handleSubmit = (e: any) => {
        e.preventDefault()
        // setPostcode(e.target.value)
        setState({
            ...state,
            postcode: e.target.value
        })

        const getData = async () => {
            // const handleError = (err: string) => {
            //     console.warn(err);
            //     return new Response(JSON.stringify({
            //         code: 400,
            //         message: 'Invalid postcode'
            //     }));
            // };


            try {
                const res = await fetch(`https://api.getAddress.io/find/${state.postcode}?api-key=${API_KEY}&expand=true`)
                const data = await res.json()
                console.log({data})
                setAddresses(data.addresses)
                setState({
                    ...state,
                    dataPostcode: data.postcode
                })
            } catch (err) {
                setState({
                    ...state,
                    error: err
                })
                return err
            }
        }
        getData()
    }

    console.log({addresses})

    const options: OptionType[] = addresses.map((suggestion: any) => {
        return { 
            value: suggestion.line_1, 
            label: suggestion.line_1, 
            lineOne: suggestion.line_1, 
            lineTwo: suggestion.line_2, 
            lineThree: suggestion.line_3, 
            lineFour: suggestion.line_4, 
            town: suggestion.town_or_city, 
            country: suggestion.country,
        }
    })

    
    console.log({options})

    const handleChange = (selectedOption: any) => {
        setSelectedOption(selectedOption)
        console.log({selectedOption})
        setState({
            ...state,
            id: selectedOption.id
        })
        setState({
            ...state,
                lineOne: selectedOption.lineOne,
                lineTwo: selectedOption.lineTwo,
                lineThree: selectedOption.lineThree,
                lineFour: selectedOption.lineFour,
                town: selectedOption.town,
                country: selectedOption.country,
        })
    }

    const returnHome = () => {
        history.replace('/')
    }

    const addNewAddress = () => {
        history.replace('/addnewaddress')
    }   

    return(
        
        <div className="postcode-container">
            <div className="postcode-inner-container-first"></div>
            <div className="postcode-inner-container-second"></div>
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTYycHgiIGhlaWdodD0iMTYwcHgiIHZpZXdCb3g9IjAgMCAxNjIgMTYwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPkNvbWJpbmVkIFNoYXBlIENvcHk8L3RpdGxlPgogICAgPGcgaWQ9IkJFUVVFU1QtLy1Ib21lcGFnZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkZJTkFMOi1Ib21lcGFnZS0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02ODAuMDAwMDAwLCAtMTcwLjAwMDAwMCkiIGZpbGw9IiNGRkNDMUUiPgogICAgICAgICAgICA8cGF0aCBkPSJNODQwLjk5OTk4NiwxNjkuMDAxMjMxIEM4MzkuMTc3NTIyLDI1Ni44NTc0NTYgNzY4Ljc1ODgyMiwzMjcuODk5MjAxIDY4MS4wMDA1NjUsMzMxLjAwMDAxMiBMNjgxLDE2OSBaIiBpZD0iQ29tYmluZWQtU2hhcGUtQ29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzYxLjAwMDAwMCwgMjUwLjAwMDAwMCkgcm90YXRlKC0yNzAuMDAwMDAwKSB0cmFuc2xhdGUoLTc2MS4wMDAwMDAsIC0yNTAuMDAwMDAwKSAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" className="shape1" alt="yellow shape"></img>
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTk1cHgiIGhlaWdodD0iMTk4cHgiIHZpZXdCb3g9IjAgMCAxOTUgMTk4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPkNvbWJpbmVkIFNoYXBlIENvcHkgMjwvdGl0bGU+CiAgICA8ZyBpZD0iQkVRVUVTVC0vLUhvbWVwYWdlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iRklOQUw6LUhvbWVwYWdlLSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzMjUuMDAwMDAwLCAtNjIyLjAwMDAwMCkiIGZpbGw9IiNGRjRDNTAiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTQyNC4yNDkzNiw2MjIgQzE0NzguNTEwOTksNjIyIDE1MjIuNDk4NzMsNjY1Ljk4NzE3MyAxNTIyLjQ5ODczLDcyMC4yNDgxMDEgQzE1MjIuNDk4NzMsNzIwLjQxNTQ5NSAxNTIyLjQ5ODMxLDcyMC41ODI3OTEgMTUyMi40OTc0Nyw3MjAuNzQ5OTg4IEwxNTIzLDcyMC43NDkzNjcgTDE1MjMsODIwIEwxMzI2LjUwMTI3LDgyMCBMMTMyNi40OTk2Niw3MzAuMjE4MzI3IEMxMzI2LjE2OTIzLDcyNi45Mzk4MDggMTMyNiw3MjMuNjEzNzE4IDEzMjYsNzIwLjI0ODEwMSBDMTMyNiw2NjUuOTg3MTczIDEzNjkuOTg3NzQsNjIyIDE0MjQuMjQ5MzYsNjIyIFoiIGlkPSJDb21iaW5lZC1TaGFwZS1Db3B5LTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0MjQuNTAwMDAwLCA3MjEuMDAwMDAwKSBzY2FsZSgtMSwgMSkgcm90YXRlKDkwLjAwMDAwMCkgdHJhbnNsYXRlKC0xNDI0LjUwMDAwMCwgLTcyMS4wMDAwMDApICI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" className="shape2" alt="red circle shape"></img>
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjA0cHgiIGhlaWdodD0iMjA0cHgiIHZpZXdCb3g9IjAgMCAyMDQgMjA0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPkNvbWJpbmVkIFNoYXBlPC90aXRsZT4KICAgIDxnIGlkPSJCRVFVRVNULS8tSG9tZXBhZ2UiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJGSU5BTDotSG9tZXBhZ2UtIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODAuMDAwMDAwLCAtODU2LjAwMDAwMCkiIGZpbGw9IiMwMDlCQzEiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjg0LjAwMDAwMSw4NTUuOTk5OTggQzI4MC4zODA5MjcsOTY3LjAyOTc1MiAxOTEuMDI5NzUyLDEwNTYuMzgwOTMgNzkuOTk5OTc5NywxMDYwIEw4MC4wMDAwNTUsODU2LjAwMDA1NSBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" className="shape3" alt="teal shape"></img>
            <div className="postcode-wrapper">
                <h1 className="postcode-title">Search by postcode</h1>
                <div className="postcode-form">
                    <label htmlFor="postcode">Postcode</label>
                    <input name="postcode" type="text" id="postcode" value={state.postcode} onChange={handleInput}/>
                    <SubmitButton onClick={handleSubmit}>Find</SubmitButton>
                </div>       
                {/* TODO: fix below so Select doesn't render immediately */}
                {state.error ? (
                    <p>{state.error}</p>
                ):(
                    <Select
                        options={options}
                        onChange={handleChange}
                        value={selectedOption}
                        className="select"
                        isClearable
                    />
                )} 
                {selectedOption && 
                <div className="address">
                    <p>Address Line 1: {state.lineOne}</p>
                    <p>Address Line 2: {state.lineTwo}</p>
                    <p>Address Line 3: {state.lineThree}</p>
                    <p>Town: {state.town}</p>
                    <p>Country: {state.country}</p>
                    <p>Postcode: {state.dataPostcode}</p>
                </div>
                }
            </div>
            <Button onClick={returnHome}>Back to home page</Button> 
            <Button id="new-address" onClick={addNewAddress}>Add new address</Button>
        </div>
    )
}

export default PostcodeLookup