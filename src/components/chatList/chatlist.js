import ChatItem from "../chatItem/chatitem";

export default function ChatList() {
  const chats = [
    {
      id: 1,
      name: "Friends",
      icon: "",
      unread: 12,
      lastMessage: {
        user: "John",
        message: "Good evening to all!!!",
        date: "12.02.23",
      },
    },
    {
      id: 2,
      name: "Work",
      icon: "https://www.pngkit.com/png/full/128-1284523_group-chat-icon-google-group-chat-icon.png",
      unread: 2,
      lastMessage: {
        user: "Lili",
        message: "There are many works that will be done today!!!",
        date: "18.02.23",
      },
    },
  ];
  
  return (
    <div className="chatList">
      {chats.map((chat) => {
        return <ChatItem chat={chat} />;
      })}
    </div>
  );
}
