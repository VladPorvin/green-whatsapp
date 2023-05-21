export const storage = {
    setItem: (name: string, item: any) => {
      localStorage.setItem(name, JSON.stringify(item));
    },
    getItem: (name: string) => {
      const item = localStorage.getItem(name);

      if (item) {
        return JSON.parse(item);
      }
    },
    hasItem: (name: string) => {
        let flag = false;

        localStorage.getItem(name) ? (flag = true) : (flag = false);
        return flag;
    }
  };