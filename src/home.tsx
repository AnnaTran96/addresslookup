import { useHistory } from 'react-router-dom'
import Button from './components/buttons/NavigationButton'

const Home = () => {

    const history = useHistory()

    const handleOnClickAddressLookup = () => {
        history.replace('/addresslookup')
    }

    const handleOnClickPostcodeLookup = () => {
        history.replace('/postcodelookup')
    }

    return(
        <div className="home-container">
            <div className="home-wrapper">
                <h1 className="main-title">Address Lookup</h1>
                <Button onClick={handleOnClickAddressLookup}>Address Look Up</Button>
                <Button onClick={handleOnClickPostcodeLookup}>Postcode Look Up</Button>
                </div>
            <div className="home-inner-container"></div>
            <img src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80" alt="image" className="happy"></img>
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTYycHgiIGhlaWdodD0iMTYwcHgiIHZpZXdCb3g9IjAgMCAxNjIgMTYwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPkNvbWJpbmVkIFNoYXBlIENvcHk8L3RpdGxlPgogICAgPGcgaWQ9IkJFUVVFU1QtLy1Ib21lcGFnZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkZJTkFMOi1Ib21lcGFnZS0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02ODAuMDAwMDAwLCAtMTcwLjAwMDAwMCkiIGZpbGw9IiNGRkNDMUUiPgogICAgICAgICAgICA8cGF0aCBkPSJNODQwLjk5OTk4NiwxNjkuMDAxMjMxIEM4MzkuMTc3NTIyLDI1Ni44NTc0NTYgNzY4Ljc1ODgyMiwzMjcuODk5MjAxIDY4MS4wMDA1NjUsMzMxLjAwMDAxMiBMNjgxLDE2OSBaIiBpZD0iQ29tYmluZWQtU2hhcGUtQ29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzYxLjAwMDAwMCwgMjUwLjAwMDAwMCkgcm90YXRlKC0yNzAuMDAwMDAwKSB0cmFuc2xhdGUoLTc2MS4wMDAwMDAsIC0yNTAuMDAwMDAwKSAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" className="shape1" alt="yellow shape"></img>
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTk1cHgiIGhlaWdodD0iMTk4cHgiIHZpZXdCb3g9IjAgMCAxOTUgMTk4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPkNvbWJpbmVkIFNoYXBlIENvcHkgMjwvdGl0bGU+CiAgICA8ZyBpZD0iQkVRVUVTVC0vLUhvbWVwYWdlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iRklOQUw6LUhvbWVwYWdlLSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzMjUuMDAwMDAwLCAtNjIyLjAwMDAwMCkiIGZpbGw9IiNGRjRDNTAiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTQyNC4yNDkzNiw2MjIgQzE0NzguNTEwOTksNjIyIDE1MjIuNDk4NzMsNjY1Ljk4NzE3MyAxNTIyLjQ5ODczLDcyMC4yNDgxMDEgQzE1MjIuNDk4NzMsNzIwLjQxNTQ5NSAxNTIyLjQ5ODMxLDcyMC41ODI3OTEgMTUyMi40OTc0Nyw3MjAuNzQ5OTg4IEwxNTIzLDcyMC43NDkzNjcgTDE1MjMsODIwIEwxMzI2LjUwMTI3LDgyMCBMMTMyNi40OTk2Niw3MzAuMjE4MzI3IEMxMzI2LjE2OTIzLDcyNi45Mzk4MDggMTMyNiw3MjMuNjEzNzE4IDEzMjYsNzIwLjI0ODEwMSBDMTMyNiw2NjUuOTg3MTczIDEzNjkuOTg3NzQsNjIyIDE0MjQuMjQ5MzYsNjIyIFoiIGlkPSJDb21iaW5lZC1TaGFwZS1Db3B5LTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0MjQuNTAwMDAwLCA3MjEuMDAwMDAwKSBzY2FsZSgtMSwgMSkgcm90YXRlKDkwLjAwMDAwMCkgdHJhbnNsYXRlKC0xNDI0LjUwMDAwMCwgLTcyMS4wMDAwMDApICI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" className="shape2" alt="red circle shape"></img>
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjA0cHgiIGhlaWdodD0iMjA0cHgiIHZpZXdCb3g9IjAgMCAyMDQgMjA0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPkNvbWJpbmVkIFNoYXBlPC90aXRsZT4KICAgIDxnIGlkPSJCRVFVRVNULS8tSG9tZXBhZ2UiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJGSU5BTDotSG9tZXBhZ2UtIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODAuMDAwMDAwLCAtODU2LjAwMDAwMCkiIGZpbGw9IiMwMDlCQzEiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjg0LjAwMDAwMSw4NTUuOTk5OTggQzI4MC4zODA5MjcsOTY3LjAyOTc1MiAxOTEuMDI5NzUyLDEwNTYuMzgwOTMgNzkuOTk5OTc5NywxMDYwIEw4MC4wMDAwNTUsODU2LjAwMDA1NSBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" className="shape3" alt="teal shape"></img>
        </div>
    )
}

export default Home