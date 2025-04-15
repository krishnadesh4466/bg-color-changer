using System.ComponentModel;

namespace Todo
{
    internal class Program
    {
        static void Main(string[] args)
        {

            calc.A = 10;
            calc.B = 20;
            Console.WriteLine(calc.Add());
            Console.WriteLine(calc.sub());
        }
    }
    public static class calc
    {
        private static int a;
        private static int b;

        public static int A
        {
            set
            {
                a = value;
            }
            get
            {
                return a;
            }

        }
        public static int B
        {
            set
            {
                b = value;
            }
            get
            {
                return b;
            }

        }
        public static int Add()
        {
            return a + b;
        }
        public static int sub()
        {
            return a - b;
        }
    }
}
