import axios from "axios";
import { useState } from "react";

const Modal = ({ isVisible = false, setIsVisible }: any) => {
    const [val, setVal] = useState("");
    const submitHandler = (e: any) => {
        e.preventDefault();

        const date = new Date();
        const currentDate = `${date.getDate()}/${
            date.getMonth() + 1
        }/${date.getFullYear()}`;

        axios
            .post("https://study-tracker-backend-vert.vercel.app/topic", {
                name: val,
                date: currentDate,
                creator: "sumana",
            })
            .then(function (response) {
                alert(
                    response.data?.status ? "Data Saved" : "Failed to save data"
                );
                e.target.reset();
                setVal("");
                setIsVisible(false);
            })
            .catch(function (error) {
                alert("Failed to save data");
                console.log(error);
            });
    };
    const changehandler = (e: any) => {
        setVal(e.target.value);
    };
    return (
        <div
            style={{
                position: "fixed",
                top: "0px",
                left: "0px",
                height: "100vh",
                width: "100vw",
                background: "#00000055",
                display: isVisible ? "block" : "none",
            }}
        >
            <div
                style={{
                    background: "#ffffff",
                    position: "absolute",
                    top: "40%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    width: "250px",
                    padding: "5px",
                }}
            >
                <p
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "10px 0px",
                    }}
                >
                    <span>Add Your Study Details</span>
                    <span
                        style={{
                            cursor: "pointer",
                            background: "#00000011",
                            padding: "5px 10px",
                        }}
                        onClick={() => setIsVisible(false)}
                    >
                        X
                    </span>
                </p>
                <hr />
                <div>
                    <form onSubmit={submitHandler}>
                        <textarea
                            name="text"
                            id="id"
                            rows={10}
                            style={{ width: "100%" }}
                            placeholder="Write here"
                            onChange={changehandler}
                            required
                        ></textarea>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <button
                                type="submit"
                                style={{
                                    padding: "7px 20px",
                                }}
                            >
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;
