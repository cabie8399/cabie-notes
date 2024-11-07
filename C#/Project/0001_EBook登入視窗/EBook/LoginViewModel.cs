using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;

namespace EBook
{
    public class LoginViewModel:INotifyPropertyChanged
    {
        // 為了拿到Main視窗的實例
        private readonly MainWindow _main;
        public LoginViewModel(MainWindow main)
        { 
            _main = main;
        }


        public event PropertyChangedEventHandler PropertyChanged;
        private void RaisePropertyChanged(string propertyName)
        {
            PropertyChangedEventHandler handler = PropertyChanged;
            if (handler != null) handler(this, new PropertyChangedEventArgs(propertyName));
        }

        // 因為同一個namespace所以可以直接用LoginModel
        // 下面Acc跟Pwd實際用的值都是來自Model那層(LoginModel)
        private LoginModel _LoginM = new LoginModel();

        public string Acc
        {
            get { return _LoginM.Acc; }
            set 
            { 
                _LoginM.Acc = value;
                RaisePropertyChanged(nameof(Acc));
            }
        }

        public string Pwd
        {
            get { return _LoginM.Pwd; }
            set
            {
                _LoginM.Pwd = value;
                RaisePropertyChanged(nameof(Pwd));
            }
        }

        // btnClick事件綁定
        // 屬於業務處理，所以應該放到ViewModel
        void LoginFunc()
        {
            if (Acc == "test" && Pwd == "test")
            {
                //MessageBox.Show("OK");
                BookList bookList = new BookList();
                bookList.Show();

                // 要想辦法拿到Main介面
                _main.Hide();
            }
            else
            {
                MessageBox.Show("Error");
                Acc = "";
                Pwd = "";
            }
        }

        // 代表是否能夠執行，我們始終給他true
        bool CanLoginExecute() {  return true; }

        // 命令
        public ICommand LoginAction
        {
            get
            {
                return new Relaycommand(LoginFunc, CanLoginExecute);
            }
        }
    }
}
