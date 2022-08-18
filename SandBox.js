import React, { useState } from "react";

export const SandBox = () => {
    const [profile, setProfile] = useState({});
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                name="firstName"
            />
        </form>
    )

}