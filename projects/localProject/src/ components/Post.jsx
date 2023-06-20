import React from 'react';

function Post(props) {
    return (
        <div className={"bg-white rounded-lg w-full h-[300px] py-2"}>
            <div className={"px-4"}>
                <div className={"flex"}>
                    <img
                        src="https://nationaltoday.com/wp-content/uploads/2022/04/Grandmother-Achievement-Day.jpg"
                        alt="" className={"rounded-full w-[50px] h-[50px] mr-2"}/>
                    <div className={"flex flex-col justify-center"}>
                        <p className={"text-black text-md font-bold leading-3"}>Ioana Cuzmin</p>
                        <p className={"text-sm text-[#ccc]"}>2 hours ago</p>
                    </div>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing </p>
            </div>
        </div>
    );
}

export default Post;