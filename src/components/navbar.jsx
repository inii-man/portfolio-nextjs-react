export default function navbar() {
    return (
        <div className="container-nav sticky top-5">
            <div className="navbar flex flex-row m-5 flex-wrap">
                <div className="basis-1/4">
                    <h1>Logo</h1>
                </div>
                <div className="menu basis-3/4 text-end">
                    <a className="mr-4" href="#home">Home</a>
                    <a className="mr-4" href="#about">About</a>
                    <a className="mr-4" href="#skills">Skills</a>
                    <a className="mr-4" href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
    )
}