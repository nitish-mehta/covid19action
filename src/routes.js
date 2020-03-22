export const routes = ['/', '/india', '/globe'];

export const mapTabToRoute = slot => routes[parseInt(slot.split('-').pop(), 10) - 1];
