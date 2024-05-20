from PyQt6 import QtWidgets
import sys

class MyWidget(QtWidgets.QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle('Hello World')
        self.resize(400, 250)
        self.setUpdatesEnabled(True)
        self.ui()

    def ui(self):
        # 在 Form 裡加入標籤
        self.label = QtWidgets.QLabel(self)
        self.label.setText('hello world')

if __name__ == '__main__':
    app = QtWidgets.QApplication(sys.argv)
    Form = MyWidget()
    Form.show()
    sys.exit(app.exec())