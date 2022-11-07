import Login from "./Login";
import Signing from "./Signing";

export default function Anonymous(props) {

    const isRegistered = props.isRegistered;

    if (isRegistered) {
        return (
            <>
                <Login></Login>
            </>
        );
    } else {
        return (
            <>
                <Signing></Signing>
            </>
        );
    }

}