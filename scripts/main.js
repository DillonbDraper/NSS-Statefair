// Import and invoke the ticket booth component function
import { FoodTicketHolders } from "./food/FoodTicketHolder.js";
import { GameTicketHolders } from "./games/GameTicketHolder.js";
import { RideTicketHolders } from "./rides/RideTicketHolders.js";
import { SideshowTicketHolders } from "./sideshows/SideshowTicketHolder.js";
import { TicketBooth } from "./TicketBooth.js";
import { FullPackageTicketHolders } from "./FullPackageTicketHolders.js";
import { visitorCounter } from "./TotalVisitors.js";


TicketBooth()
RideTicketHolders()
FoodTicketHolders()
GameTicketHolders()
SideshowTicketHolders()
FullPackageTicketHolders()
visitorCounter()