import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../hooks";
import { sendMessage } from "../../store/slices/messageSlice";
import "./input.scss";

const Input = () => {
  const [isEdited, setIsEdited] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const ref: MutableRefObject<any> = useRef();

  const handleInput = (e: any) => {
    if (isEdited === false) {
      setIsEdited(true);
      ref.current.textContent("");
    }

    ref.current.textContent(e);
  };

  useEffect(() => {
    console.log(ref);
    ref.current.textContent = "Type message";
  }, []);
  return (
    <div id="divinput" className="input">
      <div
        ref={ref}
        contentEditable={true}
        defaultValue={"Type message"}
        onFocus={() => {
          ref.current.textContent = "";
        }}
        onBlur={() => {
          if (ref.current.textContent === "")
            ref.current.textContent = "Type Message";
        }}
        onChange={(e) => {
          handleInput(e);
        }}
        className="input__field"
      ></div>
      <div className="input__buttons">
        <img src="/attach.svg" alt="input__buttons-button" onClick={() => {}} />
        <img
          src="/send.svg"
          alt="input__buttons-button"
          onClick={() => {
            dispatch(
              sendMessage({
                id: Date.now(),
                created_at: Date.now() / 1000,
                user: {
                  id: Date.now(),
                  name: "",
                  surname: "me",
                  avatar: "me",
                  you: true,
                },
                message: String(ref.current.textContent).trim(),
                is_new: false,
              })
            );
            ref.current.textContent = "Type message";
          }}
        />
      </div>
    </div>
  );
};

export default Input;
