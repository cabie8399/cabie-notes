using System.ComponentModel;
using System.Diagnostics;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace EBook
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {   
        //LoginModel loginModel;
        LoginViewModel loginViewModel;  
        public MainWindow()
        {
            InitializeComponent();
            loginViewModel = new LoginViewModel();
            this.DataContext = loginViewModel;

            //loginModel = new LoginModel();
            //loginModel.Acc = "test";
            //loginModel.Pwd = "test";
            //this.DataContext = loginModel;

            //this.DataContext = this;
        }

        // 忘記密碼 超連結
        private void Hyperlink_Click(object sender, RoutedEventArgs e)
        {

        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            //string account = txtAccount.Text;
            //string psd = txtPsd.Text;
            //string psd = txtPsd.Text;

            if (loginViewModel.LoginM.Acc == "test" && loginViewModel.LoginM.Pwd == "test")
            {
                //MessageBox.Show("OK");
                BookList bookList = new BookList();
                bookList.Show();
                this.Hide();
            }
            else
            {
                MessageBox.Show("Error");
                //txtAccount.Text = "";
                //txtPsd.Text = "";

                loginViewModel.LoginM.Acc = "";
                loginViewModel.LoginM.Pwd = "";
                loginViewModel.LoginM = loginViewModel.LoginM;
            }
        }
    }

    //public class LoginModel: INotifyPropertyChanged
    //{
    //    // 28L~33L : 寫法固定的
    //    public event PropertyChangedEventHandler PropertyChanged;
    //    private void RaisePropertyChanged(string propertyName)
    //    {
    //        PropertyChangedEventHandler handler = PropertyChanged;
    //        if (handler != null) handler(this, new PropertyChangedEventArgs(propertyName));
    //    }
    //}
}