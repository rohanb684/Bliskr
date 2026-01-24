import Link from "next/link";
import { Eye, Heart, Coins, Sparkles, ChevronRight } from "lucide-react";

type NotificationType = "view" | "match" | "coins" | "special";

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  time: string;
  link: string;
  isRead: boolean;
}

const NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    type: "view",
    title: "Profile Viewed",
    message: "Arundhati from Kolkata just checked out your profile! ✨",
    time: "2 mins ago",
    link: "/users/1",
    isRead: false,
  },
  {
    id: "2",
    type: "match",
    title: "New Match!",
    message: "You and Priya have matched! Start the conversation now 💕",
    time: "15 mins ago",
    link: "/matches",
    isRead: false,
  },
  {
    id: "3",
    type: "coins",
    title: "Low on Coins",
    message: "Running low on coins? Top up now and keep the sparks flying! 🪙",
    time: "1 hour ago",
    link: "/coins",
    isRead: true,
  },
  {
    id: "4",
    type: "special",
    title: "Someone Likes You!",
    message: "A secret admirer is waiting! Unlock to see who it is 💜",
    time: "3 hours ago",
    link: "/matches?tab=likes",
    isRead: true,
  },
];

const getNotificationIcon = (type: NotificationType) => {
  const iconClass = "w-5 h-5 text-white";
  switch (type) {
    case "view":
      return <Eye className={iconClass} />;
    case "match":
      return <Heart className={iconClass} />;
    case "coins":
      return <Coins className={iconClass} />;
    case "special":
      return <Sparkles className={iconClass} />;
  }
};

const getIconBackground = (type: NotificationType) => {
  switch (type) {
    case "view":
      return "bg-gradient-to-br from-blue-400 to-blue-600";
    case "match":
      return "bg-gradient-to-br from-pink-400 to-rose-500";
    case "coins":
      return "bg-gradient-to-br from-amber-400 to-orange-500";
    case "special":
      return "bg-gradient-to-br from-purple-400 to-brand-color";
  }
};

export default function NotificationsPage() {
  return (
    <div className="w-full py-4 flex flex-col gap-4 pb-24">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Notifications</h1>
        <button className="text-sm text-brand-color font-medium hover:underline">
          Mark all as read
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {NOTIFICATIONS.map((notification) => (
          <Link
            key={notification.id}
            href={notification.link}
            className={`
              relative flex items-center gap-3 p-4 rounded-2xl transition-all duration-200
              bg-white-card backdrop-blur-sm shadow-light-brand-color
              hover:shadow-brand-color hover:scale-[1.02]
              ${!notification.isRead ? "border-l-4 border-brand-color" : ""}
            `}
          >
            {/* Unread indicator */}
            {!notification.isRead && (
              <span className="absolute top-4 right-4 w-2.5 h-2.5 bg-brand-color rounded-full animate-pulse" />
            )}

            {/* Icon */}
            <div
              className={`
              shrink-0 w-12 h-12 rounded-full flex-center
              ${getIconBackground(notification.type)}
              shadow-md
            `}
            >
              {getNotificationIcon(notification.type)}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-gray-800 text-sm">
                  {notification.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm mt-0.5 line-clamp-2">
                {notification.message}
              </p>
              <span className="text-xs text-gray-400 mt-1 block">
                {notification.time}
              </span>
            </div>

            {/* Arrow */}
            <ChevronRight className="w-5 h-5 text-gray-400 shrink-0" />
          </Link>
        ))}
      </div>

      {/* Empty state placeholder - for when there are no notifications */}
      {NOTIFICATIONS.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-20 h-20 rounded-full bg-white-card flex-center mb-4">
            <Sparkles className="w-10 h-10 text-brand-color" />
          </div>
          <h3 className="font-semibold text-gray-700 mb-1">All caught up!</h3>
          <p className="text-gray-500 text-sm">
            No new notifications right now
          </p>
        </div>
      )}
    </div>
  );
}
